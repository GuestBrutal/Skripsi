import React from 'react'
import { Navigate } from 'react-router-dom'

//role identify
const Role = () => {
  return localStorage.getItem('role')
}

const kegiatan_id = () => {
  return localStorage.getItem('kegiatan_id')
}

// Lazy imports for User Views
const DashboardUser = React.lazy(() => import('./views/user/DashboardUser'))
const Beranda = React.lazy(() => import('./views/user/Beranda'))
const Target = React.lazy(() => import('./views/user/Target'))
const Profile = React.lazy(() => import('./views/user/Profile'))
const Pemasukan = React.lazy(() => import('./views/user/keuangan/pemasukan'))
const Pengeluaran = React.lazy(() => import('./views/user/keuangan/pengeluaran'))
const Tim = React.lazy(() => import('./views/user/Tim'))
const Relawan = React.lazy(() => import('./views/user/Relawan'))
const LaporanHarian = React.lazy(() => import('./views/user/laporan/LaporanHarian'))
const LaporanMingguan = React.lazy(() => import('./views/user/laporan/LaporanMingguan'))
const Charts = React.lazy(() => import('./views/user/Charts'))
const Setting = React.lazy(() => import('./views/user/Setting'))

// Lazy imports for Admin Views
const DashboardAdmin = React.lazy(() => import('./views/admin/DashboardAdmin'))
const DaftarKegiatan = React.lazy(() => import('./views/admin/DaftarKegiatan'))
const UserManagement = React.lazy(() => import('./views/admin/UserManagement'))
const AdminProfile = React.lazy(() => import('./views/admin/Profile'))
const KecakapanManagement = React.lazy(() => import('./views/admin/KecakapanManagement'))
const DaftarTarget = React.lazy(() => import('./views/admin/DaftarTarget'))
const DaftarKoordinator = React.lazy(() => import('./views/admin/DaftarKoordinator'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: () => <Navigate to={Role() === 'admin' ? '/admin/dashboard' : (kegiatan_id() == 0 ? '/user/beranda' : '/user/dashboard')} />, requiresAuth: true },
  { path: '/admin/manajemenpengguna', name: 'Manajemen Pengguna', element: UserManagement, requiresAuth: true },
  { path: '/admin/kecakapan', name: 'Manajemen Kecakapan', element: KecakapanManagement, requiresAuth: true },
  { path: '/admin/dashboard', name: 'Dashboard Admin', element: DashboardAdmin, requiresAuth: true },
  { path: '/admin/profile', name: 'AdminProfile', element: AdminProfile, requiresAuth:true },
  { path: '/user/profile', name: 'Profile', element: Profile, requiresAuth:true },
  { path: '/user/setting', name: 'Setting', element: Setting, requiresAuth:true },
  { path: '/user/beranda', name: 'Beranda', element: Beranda, requiresAuth:true },
  { path: '/user/dashboard', name: 'Dashboard User', element: DashboardUser, requiresAuth:true },
  { path: '/admin/daftarkegiatan', name: 'Daftar Kegiatan', element: DaftarKegiatan, requiresAuth:true },
  { path: '/user/relawan', name: 'Relawan', element: Relawan, requiresAuth:true },
  { path: '/user/charts', name: 'Charts', element: Charts, requiresAuth:true },
  { path: '/user/keuangan/pemasukan', name: 'Pemasukan', element: Pemasukan, requiresAuth:true },
  { path: '/user/keuangan/pengeluaran', name: 'Pengeluaran', element: Pengeluaran, requiresAuth:true },
  { path: '/user/tim', name: 'Tim', element: Tim, requiresAuth:true },
  { path: '/user/laporan/harian', name: 'Harian', element: LaporanHarian, requiresAuth:true },
  { path: '/user/target', name: 'Target', element:Target, requiresAuth:true },
  { path: '/user/laporan/mingguan', name: 'Mingguan', element: LaporanMingguan, requiresAuth:true },
  { path: '/admin/daftarTarget', name: 'Daftar Target', element: DaftarTarget, requiresAuth:true },
  { path: '/admin/daftarKoordinator', name: 'Daftar Koordinator', element: DaftarKoordinator, requiresAuth:true },

]

export default routes
