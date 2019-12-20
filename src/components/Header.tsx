import React from 'react';

export default function TitleBar({ title = 'React App' }: { title?: string }) {
    return (<div>
        <h3>{title}</h3>
    </div>);
}