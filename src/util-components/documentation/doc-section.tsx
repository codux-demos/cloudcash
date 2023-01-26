import { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./doc-section.module.scss";

export interface DocSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
  contentLayout?: "list" | "grid2" | "grid3" | "inline";
}

export const DocSection = ({
  title,
  description,
  className,
  children,
  contentLayout = "list",
}: DocSectionProps) => {
  const [sectionTitle, setSectionTitle] = useState<ReactNode>();
  const [sectionDescription, setSectionDescription] = useState<ReactNode>();

  useEffect(() => {
    if (typeof title === "string") {
      setSectionTitle(<h2 className={styles.title}>{title}</h2>);
    } else {
      setSectionTitle(title);
    }
    if (description !== undefined) {
      setSectionDescription(
        <div className={styles.description}>{description}</div>
      );
    }
  }, [title, description]);

  return (
    <div className={classNames(styles.root, className)}>
      {title || description ? (
        <div className={styles.header}>
          {sectionTitle}
          {sectionDescription}
        </div>
      ) : (
        <></>
      )}

      <div className={classNames(styles.content, styles[contentLayout])}>
        {children}
      </div>
    </div>
  );
};
