import {
  GenealogyArdjasp,
  GenealogyDjamasp,
  GenealogyGouderz,
  GenealogyKaioumors,
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
      <GenealogyKaioumors />
      <GenealogyKhosrou />
      <GenealogyLohrasp />
      <GenealogyNewder />
      <GenealogyRustem />
      <GenealogySelm />
      <GenealogyZoroastre />
    </div>
  );
};
