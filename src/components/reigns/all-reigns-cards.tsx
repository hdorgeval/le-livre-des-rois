import {
  BahmanCard,
  DarabCard,
  DaraCard,
  DjemschidCard,
  FeridounCard,
  GuerschaspCard,
  GuschtaspCard,
  HomaiCard,
  HouschengCard,
  IskenderCard,
  KaioumorsCard,
  KaousCard,
  KhosrouCard,
  KobadCard,
  LohraspCard,
  MinoutchehrCard,
  NewderCard,
  ThahmourasCard,
  ZewCard,
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
        <MinoutchehrCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <NewderCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <ZewCard />
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
      <div className="col-sm-6 col-lg-3">
        <BahmanCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <HomaiCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <DarabCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <DaraCard />
      </div>
      <div className="col-sm-6 col-lg-3">
        <IskenderCard />
      </div>
    </div>
  </>
);
