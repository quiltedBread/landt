import { Position as PositionProps } from "../types";
import { Bullet as BulletProps } from '../types';


function Bullet({props}: {props: BulletProps}) {
    return (
        <li>
            <input type="checkbox" checked={props.selected} />
            <span>{props.text}</span>
        </li>
    );
}

export default function Position({props}: {props: PositionProps}) {
    return (
        <div className="position">
            <h2>{props.title}</h2>
            <ul>
                {props.bullets.map(bullet => <Bullet props={bullet}/>)}
            </ul>
        </div>
    );
}