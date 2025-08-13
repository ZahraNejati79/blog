import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/toLocalDateShort";
import { trancateText } from "@/utils/trancateText";
import React from "react";

const statusStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};

function PostRow({ index, post }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{trancateText(title, 10)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${statusStyle[type].className}`}>
          {statusStyle[type].label}
        </span>
      </td>
      <td>...action</td>
    </Table.Row>
  );
}

export default PostRow;
