import styles from './genealogies.module.scss';
import { GenealogyLohrasp } from './genealogy-lohrasp/genealogy-lohrasp';
import { GenealogySelm } from './genealogy-selm/genealogy-selm';
import { GenealogyNewder } from './genealogy-newder/genealogy-newder';
import { GenealogyGouderz } from './genealogy-gouderz/genealogy-gouderz';
import { GenealogyZoroastre } from './genealogy-zoroastre/genealogy-zoroastre';
import { GenealogyArdjasp } from './genealogy-ardjasp/genealogy-ardjasp';
import { GenealogyDjamasp } from './genealogy-djamasp/genealogy-djamasp';
import { GenealogyKhosrou } from './genealogy-khosrou/genealogy-khosrou';
import { GenealogyRustem } from './genealogy-rustem/genealogy-rustem';
import { GenealogyZal } from './genealogy-zal/genealogy-zal';
import React from 'react';
export const Genealogies: React.FC = () => {
  return (
    <div className={styles.content}>
      <GenealogyArdjasp />
      <GenealogyDjamasp />
      <GenealogyGouderz />
      <GenealogyKhosrou />
      <GenealogyLohrasp />
      <GenealogyNewder />
      <GenealogyRustem />
      <GenealogySelm />
      <GenealogyZal />
      <GenealogyZoroastre />
    </div>
  );
};
