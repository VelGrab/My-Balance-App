import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';

export const categoriesExpense = [
  { name: 'Home', icon: <HomeIcon />, },
  { name: "Card", icon: <CreditCardIcon /> },
  { name: "Leisure", icon: <RequestQuoteIcon /> },
  { name: "Feeding", icon: <LocalGroceryStoreIcon /> },
  { name: "Transport", icon: <DirectionsBusIcon /> },
  { name: "Health", icon: <MedicalInformationIcon /> },
  { name: "Family", icon: <Diversity3Icon /> },
  { name: "Exercise", icon: <FitnessCenterIcon /> },
  { name: "Gift", icon: <CardGiftcardIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Restaurant", icon: <RestaurantIcon /> },
  { name: "Others", icon: <QuestionMarkIcon /> },
];

export const categoriesIncome = [
  { name: 'Salary', icon: <PaidIcon />, },
  { name: "Interest", icon: <AccountBalanceIcon /> },
  { name: "Tip", icon: <PaymentsIcon /> },
  { name: "Others", icon: <QuestionMarkIcon /> },
];