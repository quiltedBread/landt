import PositionBullet from "./PositionBullet";

interface PositionProps {
    name: string;
}

export default function Position({ name }: PositionProps) {
    return (
        <div className="position">
            <h2>{name}</h2>
            <ul>
                <PositionBullet text="Lorem, ipsum dolor." isChecked={true} />
                <PositionBullet text="Lorem, ipsum dolor." isChecked={true} />
                <PositionBullet text="Lorem, ipsum dolor." isChecked={true} />
            </ul>
        </div>
    );
}