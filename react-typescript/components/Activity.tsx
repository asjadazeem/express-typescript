import React, {useEffect, useState} from "react";

interface _Activity {
    activity: string;
    type: string;
    participants: string;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}

const Activity: React.FC = () => {
    const [activity, setActivity] = useState<_Activity>(undefined);

    const getActivity = async () => {
        try {
            const response = await fetch('http://localhost:2999/getactivity');

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json() as _Activity;
            setActivity(result);

            console.log('result is: ', JSON.stringify(result, null, 4));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getActivity();
    }, []);

    return (
        <div>
            <h2>What should I do today?</h2>
            <h4>{activity?.activity}</h4>
        </div>
    );
};

export default Activity;
