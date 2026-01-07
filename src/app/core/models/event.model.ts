export type EventType = 'Conference' | 'Exhibition' | 'Workshop' | 'Corporate' | 'Virtual';

export type SeatingStyle = 'Theatre' | 'Classroom' | 'Round Table';

export type UserRole = 'Student' | 'Delegate' | 'Speaker' | 'VIP' | 'Sponsor';

export interface BasicEventInfo {
  title: string;
  type: EventType;
  startDate: Date;
  endDate: Date;
  city: string;
  expectedParticipants: number;
  theme: string;
}

export interface VenueRequirements {
  type: 'Hotel' | 'Convention Center' | 'Outbound';
  hallsRequired: number;
  seatingStyle: SeatingStyle[];
  techRequirements: {
    projectors: boolean;
    ledWall: boolean;
    soundSystem: boolean;
    stageLighting: boolean;
    microphones: boolean; // wired/wireless
  };
  registrationDesk: boolean;
  vipArea: boolean;
  catering: {
    teaCoffee: boolean;
    lunch: boolean;
    galaDinner: boolean;
  };
}

export interface AccommodationRequirements {
  roomCount: number;
  roomTypes: {
    single: boolean;
    double: boolean;
    suite: boolean;
  };
  speakerVipAllotment: number;
  hotelPreference: 'Budget' | '3-Star' | '5-Star';
  airportTransfer: boolean;
}

export interface ProgramSpeakerManagement {
  sessionTracks: number;
  keynoteSpeakers: string[]; // List of names/IDs
  speakerTravel: boolean;
  speakerAccommodation: boolean;
  sessionChairDetails: string;
  abstractHandling: boolean;
  agendaCreated: boolean; // simple flag for now
  avRequirements: string;
}

export interface RegistrationManagement {
  onlineRegistration: boolean;
  onsiteBooth: boolean;
  registrationTypes: UserRole[];
  paymentGateway: boolean;
  delegateKit: {
    bags: boolean;
    badges: boolean;
    lanyards: boolean;
    certificates: boolean;
  };
  ticketTypes: {
    free: boolean;
    paid: boolean;
    tiered: boolean;
  };
}

export interface ExhibitionSponsorRequirements {
  stallsRequired: number;
  stallSize: '3x3m' | 'Custom';
  stallFabrication: boolean;
  exhibitionLayout: boolean;
  sponsorPackages: {
    platinum: boolean;
    gold: boolean;
    silver: boolean;
  };
  brandingMaterials: {
    backdrops: boolean;
    standees: boolean;
    banners: boolean;
    digitalScreens: boolean;
  };
}

export interface MarketingPromotion {
  website: boolean;
  socialMedia: boolean;
  emailCampaigns: boolean;
  videoPromotion: boolean;
  mediaCoverage: boolean; // Print/Digital/TV
  pressRelease: boolean;
}

export interface LogisticsOperations {
  transport: boolean;
  onGroundStaff: number;
  helpDesk: boolean;
  security: boolean;
  medical: boolean;
  badgePrinting: boolean;
  itSupport: boolean;
}

export interface FinancialRequirements {
  budgetEstimate: number;
  paymentTerms: string;
  vendorManagement: boolean;
  invoiceHandling: boolean;
  expenseTracking: boolean;
  auditReadyReports: boolean;
}

export interface PostEventRequirements {
  feedbackForms: boolean;
  certificateDistribution: boolean;
  thankYouEmails: boolean;
  photoVideoEditing: boolean;
  postEventReport: boolean;
  roiAnalysis: boolean;
}

export interface MeetyEvent {
  id: string;
  basicInfo: BasicEventInfo;
  venue: VenueRequirements;
  accommodation: AccommodationRequirements;
  program: ProgramSpeakerManagement;
  registration: RegistrationManagement;
  exhibition: ExhibitionSponsorRequirements;
  marketing: MarketingPromotion;
  logistics: LogisticsOperations;
  financial: FinancialRequirements;
  postEvent: PostEventRequirements;
}
