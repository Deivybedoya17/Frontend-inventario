import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Boxes, LayoutDashboard, PackageSearch, ScrollText, FileText, Receipt, ArrowRightLeft, TriangleAlert, Wallet, Landmark, Settings, User, LogOut, Search, Bell, ChevronRight, PackageMinus, PlusCircle, LogIn, TrendingUp, TrendingDown, CircleDollarSign, Clock4, Filter, Download, ChevronLeft, ArrowDown, ArrowUp, PackagePlus, X, QrCode, Calendar, Building2, ChevronDown, ReceiptText, MapPin, CheckCircle2, ScanBarcode, CalendarClock, FileSpreadsheet, Laptop, Mouse, Monitor } from 'lucide-angular';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(LucideAngularModule.pick({ Boxes, LayoutDashboard, PackageSearch, ScrollText, FileText, Receipt, ArrowRightLeft, TriangleAlert, Wallet, Landmark, Settings, User, LogOut, Search, Bell, ChevronRight, PackageMinus, PlusCircle, LogIn, TrendingUp, TrendingDown, CircleDollarSign, Clock4, Filter, Download, ChevronLeft, ArrowDown, ArrowUp, PackagePlus, X, QrCode, Calendar, Building2, ChevronDown, ReceiptText, MapPin, CheckCircle2, ScanBarcode, CalendarClock, FileSpreadsheet, Laptop, Mouse, Monitor }))]
};
