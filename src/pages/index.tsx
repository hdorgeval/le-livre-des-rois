import { Title, SEO, ReignCards, ReadMoreReadLess } from '../components';
import { Layout } from '../components/fr';
import React from 'react';
const Index: React.FC = () => (
  <Layout>
    <SEO
      lang="fr"
      title="Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="Histoire légendaire des rois de Perse - Shâhnâmeh"
    />
    <div>
      <Title
        text="Le Livre des Rois - Shâhnâmeh"
        subtitle="Histoire légendaire des rois de Perse"
      />
      <div className="container">
        <div className="text-light my-4">
          <ReadMoreReadLess height="150px" readMoreText="Lire plus" readLessText="Lire moins">
            <p>
              Il y avait un livre des temps anciens, dans lequel étaient écrites beaucoup
              d’histoires.
            </p>
            <p>
              Tous les Mobeds en possédaient des parties, chaque homme intelligent en portait un
              fragment avec lui.
            </p>
            <p>
              Il y avait un Pehlewan, d’une famille de Dihkans, brave et puissant, plein
              d’intelligence et très illustre; il aimait à rechercher les faits des anciens et à
              recueillir les récits des temps passés.
            </p>
            <p>
              Il fit venir de chaque province un vieux Mobed, qui avait rassemblé les parties de ce
              livre; il leur demanda l’origine des rois et des guerriers illustres, et la manière
              dont ils organisèrent au commencement le monde, qu’ils nous ont transmis dans un état
              si misérable, et comment, sous une heureuse étoile, ils terminèrent chaque jour une
              entreprise.
            </p>
            <p>
              Les grands récitèrent devant lui, l’un après l’autre, les traditions des rois et les
              vicissitudes du monde. Il écouta leurs discours, et en composa un livre digne de
              renom. C’est le souvenir qu’il a laissé parmi les hommes, et les grands et les petits
              célébrèrent ses louanges.
            </p>
          </ReadMoreReadLess>
        </div>

        <ReignCards />
      </div>
    </div>
  </Layout>
);

export default Index;
