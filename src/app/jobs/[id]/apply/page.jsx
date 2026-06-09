import { getJobById } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';

const ApplyPage = async ({ params }) => {
    const { id } = await params
    const user = await getUserSession()

    if (!user) {
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }

    if (user.role !== 'seeker') {
        return(
            <div>
                <h1>Pleasesign in seeker</h1>
            </div>
        )
    }

    const job = await getJobById(id);

    return (
        <div>
            <h2>Appt For this PAge 
                {job.title}</h2>
                <JobApply job={job}/>
        </div>
    );
};

export default ApplyPage;