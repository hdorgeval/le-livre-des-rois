import styles from './index.module.scss';
import { Layout, Title } from '../components';
import React from 'react';

const Index: React.FC = () => (
  <Layout>
    <div>
      <Title text="Le Livre des Rois" subtitle="Histoire légendaire des rois de Perse" />
      <div className={styles.content}>
        <p>
          Il y avait un livre des temps anciens, dans lequel étaient écrites beaucoup d’histoires.
          Tous les Mobeds en possédaient des parties, chaque homme intelligent en portait un
          fragment avec lui. Il y avait un Pehlewan, d’une famille de Dihkans, brave et puissant,
          plein d’intelligence et très illustre; il aimait à rechercher les faits des anciens et à
          recueillir les récits des temps passés. Il fit venir de chaque province un vieux Mobed,
          qui avait rassemblé les parties de ce livre; il leur demanda l’origine des rois et des
          guerriers illustres, et la manière dont ils organisèrent au commencement le monde, qu’ils
          nous ont transmis dans un état si misérable, et comment, sous une heureuse étoile, ils
          terminèrent chaque jour une entreprise. Les grands récitèrent devant lui, l’un après
          l’autre, les traditions des rois et les vicissitudes du monde. Il écouta leurs discours,
          et en composa un livre digne de renom. C’est le souvenir qu’il a laissé parmi les hommes,
          et les grands et les petits célébrèrent ses louanges.
        </p>
      </div>
    </div>
  </Layout>
);

export default Index;
