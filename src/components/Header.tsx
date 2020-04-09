import React from 'react';
import './Header.scss';
import '../styles/index.scss'
export default function TitleBar({ title = 'React App' }: { title?: string }) {
    return (<div>
        <h3 className="test">{title}</h3>
    </div>);
}