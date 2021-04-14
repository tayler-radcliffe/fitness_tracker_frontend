import React from "react";

export default function Activity (props) {
    const {
        activity
    } = props;


    return (
        <div class="activity-card">
            <h4>Name: {activity.name}</h4>
            <h4>Description: {activity.description}</h4>
            <h4>Duration: {activity.duration}</h4>
            <h4>Count: {activity.count}</h4>
        </div>
        )
}
