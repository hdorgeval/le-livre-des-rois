import {
  DjemschidCard,
  FeridounCard,
  GuerschaspCard,
  GuschtaspCard,
  HouschengCard,
  KaioumorsCard,
  KaousCard,
  KhosrouCard,
  KobadCard,
  LohraspCard,
  ThahmourasCard,
  ZohakCard,
} from '.';
import React from 'react';

export const ReignCards: React.FC = () => (
  <>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <KaioumorsCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <HouschengCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <ThahmourasCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <DjemschidCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <ZohakCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <FeridounCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <GuerschaspCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <KobadCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <KaousCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <KhosrouCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <LohraspCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <GuschtaspCard />
      </div>
    </div>
  </>
);
