import React from 'react';
import './Header.scss';
export default function TitleBar({ title = 'React App' }: { title?: string }) {
    return (<div>
        <h3 className="text">{title}</h3>
    </div>);
}