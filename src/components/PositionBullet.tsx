import React from 'react';

interface PositionBulletProps {
    isChecked: boolean;
    text: string;
}

export default function PositionBullet({ isChecked, text }: PositionBulletProps) {
    const [checked, setChecked] = React.useState(isChecked);
    return (
        <li>
            <input type="checkbox" checked={checked} onChange={() =>setChecked(!checked)} />
            <span>{text}</span>
        </li>
    );
}