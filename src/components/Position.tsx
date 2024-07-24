import { useState } from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import { PresetColors } from "antd/es/theme/internal";

import { Position as PositionProps } from "../types";
import { Bullet as BulletProps } from "../types";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const columns: TableProps<BulletProps>["columns"] = [
    {
        title: "Text",
        dataIndex: "text",
    },
    {
        title: "Tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
            <>
                {tags.map((tag, i) => {
                    // TODO create hash func for colors so tags with same text are same color
                    const tagColor = PresetColors[Math.floor(Math.random()*PresetColors.length)]
                    return (
                        <Tag color={tagColor} key={i}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

export default function Position({ props }: { props: PositionProps }) {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        // TODO remove local state and update global state
        setSelectedRowKeys(newSelectedRowKeys);
    };
    // Define row selection config
    const rowSelection: TableRowSelection<BulletProps> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <div className="position">
            <h2>{props.title}</h2>
            <Table
                columns={columns}
                dataSource={props.bullets}
                pagination={false}
                showHeader={false}
                rowSelection={rowSelection}
            />
        </div>
    );
}
