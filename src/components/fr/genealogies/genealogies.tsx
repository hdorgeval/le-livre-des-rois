import {
  GenealogyArdjasp,
  GenealogyDjamasp,
  GenealogyGouderz,
  GenealogyIsfendiar,
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
      <GenealogyIsfendiar />
      <GenealogyNewder />
      <GenealogyRustem />
      <GenealogySelm />
      <GenealogyZoroastre />
    </div>
  );
};
