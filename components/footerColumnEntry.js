import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";

const ColumnEntry = ({ columnDetails }) => {
  return (
    <div className="flex flex-col justify-start ">
      <h3>{columnDetails.title}</h3>
      <div className="mt-7 flex flex-col justify-start gap-4">
        {
          // eslint-disable-next-line react/no-array-index-key
          columnDetails.entries.map((entry, index) => (
            <Link
              key={
                // eslint-disable-next-line react/no-array-index-key
                index
              }
              href={entry.link}>
              <p className={``}>About</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default ColumnEntry;
