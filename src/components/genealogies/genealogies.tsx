import {
  GenealogyArdjasp,
  GenealogyDjamasp,
  GenealogyGouderz,
  GenealogyKhosrou,
  GenealogyLohrasp,
  GenealogyNewder,
  GenealogyRustem,
  GenealogySelm,
  GenealogyZoroastre,
} from '.';
import React from 'react';
export const Genealogies: React.FC = () => {
  return (
    <div>
      <GenealogyArdjasp />
      <GenealogyDjamasp />
      <GenealogyGouderz />
      <GenealogyKhosrou />
      <GenealogyLohrasp />
      <GenealogyNewder />
      <GenealogyRustem />
      <GenealogySelm />
      <GenealogyZoroastre />
    </div>
  );
};
