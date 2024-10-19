import store from ".";

interface OnboardingInfo {
  responsibility: string;
  companySize: string;
  targetAudience: string;
  productInterest: string[];
  product: string[];
  profileImage: string;
  profileColor: string;
  headline:string;
  jobTitle: string;
  location: string;
}

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
