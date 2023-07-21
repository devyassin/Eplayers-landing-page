interface Player {
  name: string;
  role: string;
  biography: string;
  picture: string;
  stats: {
    placeOfBirth: string;
    dateOfBirth: string;
    clubStart: string;
    weight: string;
    height: string;
    marketValue: string;
  };
}

export default interface Team {
  name: string;
  logo: string;
  description: string;
  players: Player[];
  Trophys: {
    ChampionsLeague: { picture: string; number: string };
    EuropienLeague: { picture: string; number: string };
    FifaClubWorldCup: { picture: string; number: string };
    SpanishCup: { picture: string; number: string };
    UEAFcup: { picture: string; number: string };
  };
  Tshirts: {
    Tshirt1: string;
    Tshirt2: string;
    Tshirt3: string;
  };
}
