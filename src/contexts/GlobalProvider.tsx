//libs
import type { Props } from "../types/common";

import {Provider as AppProvider} from './app/AppContext';
import {Provider as PredictionProvider} from './ai/PredictionContext';
import {Provider as RecommendationProvider} from './ai/RecommendationContext';
import {Provider as AnalyticsProvider} from './analytics/AnalyticsContext';
import {Provider as AuthProvider} from './auth/AuthContext';
import {Provider as CommunityProvider} from './community/CommunityContext';
import {Provider as ComplianceProvider} from './compliance/ComplianceContext';
import {Provider as CertificationProvider} from './education/CertificationContext';
import {Provider as EducationProvider} from './education/EducationContext';
import {Provider as FinanceProvider} from './finance/FinanceContext';
import {Provider as ForecastProvider} from './finance/ForecastContext';
import {Provider as WalletProvider} from './finance/WalletContext';
import {Provider as LanguageProvider} from './language/LanguageContext';
import {Provider as LogisticsProvider} from './logistics/LogisticsContext';
import {Provider as HeatmapProvider} from './maps/HeatmapContext';
import {Provider as MapProvider} from './maps/MapContext';
import {Provider as CartProvider} from './marketplace/CartContext';
import {Provider as MarketplaceProvider} from './marketplace/MarketplaceContext';
import {Provider as TradeExchangeProvider} from './marketplace/TradeExchangeContext';
import {Provider as MessagingProvider} from './messaging/MessagingContext';
import {Provider as NotificationsProvider} from './notifications/NotificationContext';
import {Provider as OfflineProvider} from './offline/OfflineContext';
import {Provider as SyncProvider} from './offline/SyncContext';
import {Provider as ReputationProvider} from './reputation/ReputationContext';
import {Provider as VerificationProvider} from './reputation/VerificationContext';
import {Provider as SafetyProvider} from './safety/SafetyContext';
import {Provider as SocketProvider} from './socket/SocketContext';
import {Provider as SupplyChainProvider} from './supply_chain/SupplyChainContext';
import {Provider as ModalProvider} from './ui/ModalContext';
import {Provider as SidebarProvider} from './ui/SidebarContext';
import {Provider as ThemeProvider} from './ui/ThemeContext';
import {Provider as ToastProvider} from './ui/ToastContext';

function GlobalProvider({children}: Props) {
    return (
        <AppProvider>
            <PredictionProvider/>
            <RecommendationProvider/>
            <AnalyticsProvider/>
            <AuthProvider/>
            <CommunityProvider/>
            <ComplianceProvider/>
            <CertificationProvider/>
            <EducationProvider/>
            <FinanceProvider/>
            <ForecastProvider/>
            <WalletProvider/>
            <LanguageProvider/>
            <LogisticsProvider/>
            <HeatmapProvider/>
            <MapProvider/>
            <CartProvider/>
            <MarketplaceProvider/>
            <TradeExchangeProvider/>
            <MessagingProvider/>
            <NotificationsProvider/>
            <OfflineProvider/>
            <SyncProvider/>
            <ReputationProvider/>
            <VerificationProvider/>
            <SafetyProvider/>
            <SocketProvider/>
            <SupplyChainProvider/>
            <ModalProvider/>
            <SidebarProvider/>
            <ThemeProvider/>
            <ToastProvider/>
        </AppProvider>
    )
}

export default GlobalProvider;

