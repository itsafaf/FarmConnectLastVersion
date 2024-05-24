import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.js';
import './i18n.js';
import Products from './Pages/products.js';
import { toast } from 'react-toastify';
import Message from './Components/firebase_Messaging.js';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { messaging } from './firebase/firebase.js';
import Equipements from './Components/Equipements';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home';
import Account from './Pages/Account.js';
import Maain from './Pages/Maain';
import Workforce from './Pages/workforce';
import TermsAndConditions from './Components/Termes.js'; 
import Feed from './Pages/Feed.js';
import Ajout from './Components/AjoutP.js';
import ContactUs from './Components/ContactUs';
import 'react-toastify/dist/ReactToastify.css';
import NotAllowed from './Pages/NotAllowed.js';
import Admin1 from './Pages/admin1.js';
import Dashboard from "./Pages/pagesAdmin/dashboard/Dashboard";
import Team from "./Pages/pagesAdmin/team/Team";
import Contacts from "./Pages/pagesAdmin/contacts/Contacts";
import Invoices from "./Pages/pagesAdmin/invoices/Invoices";
import Form from "./Pages/pagesAdmin/form/Form";
import FAQ from "./Pages/pagesAdmin/faq/FAQ";
import BarChart from "./Pages/pagesAdmin/barChart/BarChart";/*C:\Users\HP\Desktop\PROJET actuel\farm-appli-2\src\Pages\pagesAdmin\barChart*/
import PieChart from "./Pages/pagesAdmin/pieChart/PieChart";
import LineChart from "./Pages/pagesAdmin/lineChart/LineChart";
import NotFound from "./Pages/pagesAdmin/notFound/NotFound";

async function requestPermission() {
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    const token = await getToken(messaging, {
      vapidKey: 'BErmFXdtXxyIDJhBRLw_vQSUGSkH4YS9RJZWLmI67qI_GhEFXq0Bs-3mVzeTTN8yVkCQyM9vLhZ5F-x7M-nbzb4',
    });

    // We can send token to server
  } else if (permission === 'denied') {
    // notifications are blocked
    alert('You denied for the notification');
  }
}

function App() {
  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });

  getToken(messaging, {
    vapidKey: 'BErmFXdtXxyIDJhBRLw_vQSUGSkH4YS9RJZWLmI67qI_GhEFXq0Bs-3mVzeTTN8yVkCQyM9vLhZ5F-x7M-nbzb4',
  });

  const { currentUser, isLoading } = useContext(AuthContext);

  const ProtectedRoute = ({ children, notAllowed }) => {
    let role = localStorage.getItem('role');
    if (notAllowed && notAllowed.includes(role)) {
      return <NotAllowed />;
    }
    
    if (!currentUser) {
      return <Navigate to="/Home" />;
    }
    return children;
  };

  if(isLoading) return <div>Loading...</div>

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/Maain" element={<ProtectedRoute><Maain /></ProtectedRoute>} />
          <Route path="/Maain/:id" element={<ProtectedRoute><Maain /></ProtectedRoute>} />
          <Route path="/Products" element={<ProtectedRoute notAllowed={[""]}><Products /></ProtectedRoute>} />
          <Route path="/termes" element={<TermsAndConditions />} />
          <Route path="/Equipements" element={<ProtectedRoute notAllowed={["commercant", "consomateur"]}><Equipements /></ProtectedRoute>} />
          <Route path="/sections" element={<ProtectedRoute notAllowed={["ingenieur", ""]}><sections /></ProtectedRoute>} />
          <Route path="/workforce" element={<ProtectedRoute notAllowed={["commercant","consomateur"]}><Workforce /></ProtectedRoute>} />
          <Route path="/Feed" element={<ProtectedRoute notAllowed={["consomateur","commercant"]}><Feed /></ProtectedRoute>} />
          <Route path="/contactus" element={<ContactUs />} /> 
          <Route path="/Ajouter" element={<ProtectedRoute notAllowed={["consomateur",]}><Ajout /></ProtectedRoute>} />
          <Route path="/admin1" element={<ProtectedRoute><Admin1 /></ProtectedRoute>} />
          
          {/* Routes pour les pages spécifiques de l'administration */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
          <Route path="/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
          <Route path="/invoices" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
          <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
          <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
          <Route path="/bar" element={<ProtectedRoute><BarChart /></ProtectedRoute>} />
          <Route path="/pie" element={<ProtectedRoute><PieChart /></ProtectedRoute>} />
          <Route path="/line" element={<ProtectedRoute><LineChart /></ProtectedRoute>} />
          <Route path="/admin/*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
          {/* Redirection vers NotFound pour les routes non trouvées dans l'administration */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

