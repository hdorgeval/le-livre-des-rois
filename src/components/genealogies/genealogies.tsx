import styles from './genealogies.module.scss';
import { GenealogyLohrasp } from './genealogy-lohrasp/genealogy-lohrasp';
import { GenealogySelm } from './genealogy-selm/genealogy-selm';
import { GenealogyNewder } from './genealogy-newder/genealogy-newder';
import React from 'react';
export const Genealogies: React.FC = () => {
  return (
    <div className={styles.content}>
      <GenealogyLohrasp />
      <GenealogySelm />
      <GenealogyNewder />
    </div>
  );
};
