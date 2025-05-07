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
import ReportsPage from '../pages/ReportsPage';
import ManageMinistries from '../pages/ManageMinistries';
import RequestFunds from '../pages/RequestFunds';
import OfficeFundTransfers from '../pages/OfficeFundTransfers';
import OfficeBudgetOverview from '../pages/OfficeBudgetOverview';
import ExpenditureTracker from '../pages/ExpenditureTracker';
import OfficeReports from '../pages/OfficeReports';
import OfficeInfo from '../pages/OfficeInfo';

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
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/manage-ministries" element={<ManageMinistries />} />
      <Route path="/request-funds" element={<RequestFunds />} />
      <Route path="/fund-transfers-office" element={<OfficeFundTransfers />} />
      <Route path="/budget-overview" element={<OfficeBudgetOverview />} />
      <Route path="/expenditure-tracker" element={<ExpenditureTracker />} />
      <Route path="/reports-office" element={<OfficeReports />} />
      <Route path="/office-info" element={<OfficeInfo />} />
    </Routes>
  );
};

export default AppRoutes;