import { Table, Tag } from "antd";
import type { TableProps } from "antd";

import { Position as PositionProps } from "../types";
import { Bullet as BulletProps } from "../types";

// type TableRowSelection<T> = TableProps<T>["rowSelection"];

const columns: TableProps<BulletProps>["columns"] = [
    {
        title: "Text",
        dataIndex: "text",
        key: "text",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

// const rowSelection: TableRowSelection<BulletProps> = {
//     selectedRowKeys,
//     onChange: onSelectChange,
// };

export default function Position({ props }: { props: PositionProps }) {
    return (
        <div className="position">
            <h2>{props.title}</h2>
            <Table
                columns={columns}
                dataSource={props.bullets}
                pagination={false}
                showHeader={false}
                // rowSelection={}
            />
        </div>
    );
}
