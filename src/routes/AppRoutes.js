import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';
import OfficeDashboard from '../pages/OfficeDashboard';
import PendingRequests from '../pages/PendingRequests';
import FundTransfers from '../pages/FundTransfers';
import BudgetManagement from '../pages/BudgetManagement';
import OfficeManagement from '../pages/OfficeManagement';
import OfficeList from '../pages/OfficeList';
import AddOffice from '../pages/AddOffice';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/office" element={<OfficeDashboard />} />
      <Route path="/pending-requests" element={<PendingRequests />} />
      <Route path="/fund-transfers" element={<FundTransfers />} />
      <Route path="/budget" element={<BudgetManagement />} />
      <Route path="/offices" element={<OfficeManagement />} />
      <Route path="/offices/list" element={<OfficeList />} />
      <Route path="/offices/add" element={<AddOffice />} />
    </Routes>
  );
};

export default AppRoutes;