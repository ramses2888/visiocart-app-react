import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function HomeScreen() {
  const purchaseHistory = [
    {
      id: "1",
      date: "Nov 10, 2021",
      time: "11:20 AM",
      items: "1 Items",
      total: "$45.60",
    },
    {
      id: "2",
      date: "Nov 18, 2021",
      time: "12:20 PM",
      items: "2 Items",
      total: "$15.60",
    },
  ];

  const coupons = [
    { id: "1", title: "10% off Fruit", bg: "#E8F5E9", text: "#2E7D32" },
    { id: "2", title: "2-for-1 Bread", bg: "#FFF3E0", text: "#E65100" },
    { id: "3", title: "2-for-1 Drinks", bg: "#E1F5FE", text: "#0277BD" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 01 Encabezado Superior */}
      <View style={styles.header}>
        <Text style={styles.logoText}>🌐 Global-Market</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.iconText}>🏠</Text>
          <Text style={styles.iconText}>🔍</Text>
          <Text style={styles.iconText}>👤</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 02 Vinculación del Carrito con Código QR */}
        <View style={styles.qrCard}>
          <Text style={styles.qrTitle}>Scan to Bind with Cart #402</Text>
          <View style={styles.qrContainer}>
            <QRCode
              value="VISIOCART-CART-402-USER-8821"
              size={180}
              color="#1A4171"
              backgroundColor="white"
            />
          </View>
          <Text style={styles.qrSubtitle}>
            Scan to Bind with Cart #402 (RF-01)
          </Text>

          {/* 03 Botón Checkout QR */}
          <TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.8}>
            <Text style={styles.checkoutBtnText}>Checkout QR</Text>
          </TouchableOpacity>
        </View>

        {/* 04 Historial de Compras */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Purchase History (RF-11)</Text>
        </View>
        <View style={styles.historyTable}>
          <View style={styles.tableHeader}>
            <Text style={[styles.thText, { flex: 2 }]}>Date</Text>
            <Text style={[styles.thText, { flex: 1.5 }]}>Items Bought</Text>
            <Text style={[styles.thText, { flex: 1.5, textAlign: "right" }]}>
              Total Spent
            </Text>
          </View>
          {purchaseHistory.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <View style={{ flex: 2 }}>
                <Text style={styles.rowDate}>{item.date}</Text>
                <Text style={styles.rowTime}>{item.time}</Text>
              </View>
              <Text style={[styles.rowText, { flex: 1.5 }]}>{item.items}</Text>
              <Text style={[styles.rowTotal, { flex: 1.5 }]}>
                {item.total} ›
              </Text>
            </View>
          ))}
        </View>

        {/* 05 Recompensas y Cupones */}
        <Text style={styles.sectionTitle}>Rewards & Coupons</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollContainer={false}
          style={styles.couponsContainer}
        >
          {coupons.map((coupon) => (
            <View
              key={coupon.id}
              style={[styles.couponCard, { backgroundColor: coupon.bg }]}
            >
              <Text style={styles.couponIcon}>🎁</Text>
              <Text style={[styles.couponText, { color: coupon.text }]}>
                {coupon.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* 08 Barra de Navegación Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🕒</Text>
          <Text style={styles.navLabel}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏷️</Text>
          <Text style={styles.navLabel}>Coupons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  // En el objeto styles de HomeScreen.js:
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 35, // Aumenta este valor para dar espacio a la barra de estado del celular
    paddingBottom: 14,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A4171",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },
  iconText: {
    fontSize: 18,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 90,
  },
  qrCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  qrTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 15,
  },
  qrContainer: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  qrSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 12,
    marginBottom: 16,
  },
  checkoutBtn: {
    backgroundColor: "#1A4171",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutBtnText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 10,
  },
  historyTable: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingBottom: 8,
    marginBottom: 8,
  },
  thText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#94A3B8",
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F8FAFC",
  },
  rowDate: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
  },
  rowTime: {
    fontSize: 11,
    color: "#94A3B8",
  },
  rowText: {
    fontSize: 12,
    color: "#64748B",
  },
  rowTotal: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1A4171",
    textAlign: "right",
  },
  couponsContainer: {
    flexDirection: "row",
  },
  couponCard: {
    width: 110,
    height: 90,
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  couponIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  couponText: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingBottom: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navIconActive: {
    fontSize: 18,
  },
  navLabelActive: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1A4171",
  },
  navIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
  navLabel: {
    fontSize: 10,
    color: "#64748B",
  },
});
