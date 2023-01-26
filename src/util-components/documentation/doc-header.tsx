import { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./doc-header.module.scss";

export interface DocHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export const DocHeader = ({
  title,
  description,
  className,
}: DocHeaderProps) => {
  const [pageTitle, setPageTitle] = useState<ReactNode>();
  const [pageDescription, setPageDescription] = useState<ReactNode>();

  useEffect(() => {
    if (typeof title === "string") {
      setPageTitle(<h1 className={styles.title}>{title}</h1>);
    } else {
      setPageTitle(title);
    }
    if (description !== undefined) {
      setPageDescription(
        <div className={styles.description}>{description}</div>
      );
    }
  }, [title, description]);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        {pageTitle}
        {pageDescription}
      </div>
    </div>
  );
};
