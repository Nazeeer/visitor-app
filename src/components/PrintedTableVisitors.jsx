import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrintedHeader from "./PrintedHeader";
import Footer from "./Footer";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  borderRight: "1px solid #ddd",
  maxHeight: "8px",
  "@media print": {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#070F2B",
      "-webkit-print-color-adjust": "exact",
      colorAdjust: "exact",
    },
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    id: 1,
    name: "محمد سعيد عبد السميع",
    phoneNumber: "01018547851",
    building: "النظم",
    office: "البرمجيات",
    from: "جوجل",
    reason: "بحث تعاون",
    comment: "لا يوجد",
  },
  {
    id: 2,
    name: "علي أحمد حسن",
    phoneNumber: "01234567890",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "فيسبوك",
    reason: "ترويج منتجات",
    comment: "تحت الاختبار",
  },
  {
    id: 3,
    name: "فاطمة محمد علي",
    phoneNumber: "01123456789",
    building: "المبيعات",
    office: "التجارة الإلكترونية",
    from: "أمازون",
    reason: "تسويق منتجات",
    comment: "موافقة مسبقة",
  },
  {
    id: 4,
    name: "ياسمين مصطفى حسن",
    phoneNumber: "01012345678",
    building: "التصميم",
    office: "الجرافيك",
    from: "أدوبي",
    reason: "تصميم الشعارات",
    comment: "جاري التنفيذ",
  },
  {
    id: 5,
    name: "أحمد محمود محمد",
    phoneNumber: "01234567891",
    building: "تطوير البرمجيات",
    office: "التقنية",
    from: "مايكروسوفت",
    reason: "تطوير تطبيقات الويب",
    comment: "قيد الدراسة",
  },
  {
    id: 6,
    name: "نورهان عمر علي",
    phoneNumber: "01198765432",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "تويتر",
    reason: "إدارة حملات الإعلان",
    comment: "جاري الاستعراض",
  },
  {
    id: 7,
    name: "ريم أحمد محمد",
    phoneNumber: "01087654321",
    building: "الموارد البشرية",
    office: "الإدارة",
    from: "لينكد إن",
    reason: "استقطاب الموظفين",
    comment: "تحت الدراسة",
  },
  {
    id: 8,
    name: "محمود حسن محمود",
    phoneNumber: "01234567892",
    building: "التسويق الرقمي",
    office: "التجارة الإلكترونية",
    from: "سناب شات",
    reason: "تسويق المنتجات",
    comment: "قيد الانتظار",
  },
  {
    id: 9,
    name: "سارة علي أحمد",
    phoneNumber: "01123456788",
    building: "تطوير البرمجيات",
    office: "التقنية",
    from: "غوغل",
    reason: "تطوير تطبيقات المحمول",
    comment: "تحت الاختبار",
  },
  {
    id: 10,
    name: "مريم مصطفى حسن",
    phoneNumber: "01019283746",
    building: "التصميم",
    office: "الجرافيك",
    from: "فوتوشوب",
    reason: "تصميم المواقع",
    comment: "موافقة مسبقة",
  },
  {
    id: 11,
    name: "أحمد علي محمود",
    phoneNumber: "01234567893",
    building: "الدعم الفني",
    office: "التقنية",
    from: "مايكروسوفت",
    reason: "حل المشاكل التقنية",
    comment: "جاري العمل",
  },
  {
    id: 12,
    name: "نور محمد علي",
    phoneNumber: "01134567894",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "إنستجرام",
    reason: "تسويق المنتجات",
    comment: "تحت الدراسة",
  },
  {
    id: 13,
    name: "مراد علي حسن",
    phoneNumber: "01056789432",
    building: "تطوير البرمجيات",
    office: "التقنية",
    from: "فيسبوك",
    reason: "تطوير تطبيقات الجوال",
    comment: "تحت الانتظار",
  },
  {
    id: 14,
    name: "ليلى عمر محمود",
    phoneNumber: "01234567895",
    building: "المبيعات",
    office: "التجارة الإلكترونية",
    from: "أمازون",
    reason: "تسويق المنتجات",
    comment: "قيد الدراسة",
  },
  {
    id: 15,
    name: "أميرة حسن علي",
    phoneNumber: "01156789432",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "تويتر",
    reason: "ترويج المنتجات",
    comment: "موافقة مسبقة",
  },
  {
    id: 16,
    name: "علي أحمد حسن",
    phoneNumber: "01234567890",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "فيسبوك",
    reason: "ترويج منتجات",
    comment: "تحت الاختبار",
  },
  {
    id: 17,
    name: "فاطمة محمد علي",
    phoneNumber: "01123456789",
    building: "المبيعات",
    office: "التجارة الإلكترونية",
    from: "أمازون",
    reason: "تسويق منتجات",
    comment: "موافقة مسبقة",
  },
  {
    id: 18,
    name: "ياسمين مصطفى حسن",
    phoneNumber: "01012345678",
    building: "التصميم",
    office: "الجرافيك",
    from: "أدوبي",
    reason: "تصميم الشعارات",
    comment: "جاري التنفيذ",
  },
  {
    id: 19,
    name: "أحمد محمود محمد",
    phoneNumber: "01234567891",
    building: "تطوير البرمجيات",
    office: "التقنية",
    from: "مايكروسوفت",
    reason: "تطوير تطبيقات الويب",
    comment: "قيد الدراسة",
  },
  {
    id: 20,
    name: "نورهان عمر علي",
    phoneNumber: "01198765432",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "تويتر",
    reason: "إدارة حملات الإعلان",
    comment: "جاري الاستعراض",
  },
  {
    id: 171,
    name: "فاطمة محمد علي",
    phoneNumber: "01123456789",
    building: "المبيعات",
    office: "التجارة الإلكترونية",
    from: "أمازون",
    reason: "تسويق منتجات",
    comment: "موافقة مسبقة",
  },
  {
    id: 181,
    name: "ياسمين مصطفى حسن",
    phoneNumber: "01012345678",
    building: "التصميم",
    office: "الجرافيك",
    from: "أدوبي",
    reason: "تصميم الشعارات",
    comment: "جاري التنفيذ",
  },
  {
    id: 191,
    name: "أحمد محمود محمد",
    phoneNumber: "01234567891",
    building: "تطوير البرمجيات",
    office: "التقنية",
    from: "مايكروسوفت",
    reason: "تطوير تطبيقات الويب",
    comment: "قيد الدراسة",
  },
  {
    id: 201,
    name: "نورهان عمر علي",
    phoneNumber: "01198765432",
    building: "التسويق",
    office: "التجارة الإلكترونية",
    from: "تويتر",
    reason: "إدارة حملات الإعلان",
    comment: "جاري الاستعراض",
  },
];

export default function PrintedTableVisitors() {
  return (
    <>
      <PrintedHeader />
      <TableContainer component={Paper} id="tableContainer">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">م</StyledTableCell>
              <StyledTableCell align="center">اسم الزائر</StyledTableCell>
              <StyledTableCell align="center">رقم المحمول</StyledTableCell>
              <StyledTableCell align="center">المبنى</StyledTableCell>
              <StyledTableCell align="center">المكتب</StyledTableCell>
              <StyledTableCell align="center">
                اسم الجهة / الشركه
              </StyledTableCell>
              <StyledTableCell align="center">سبب الزيارة</StyledTableCell>
              <StyledTableCell align="center">تعليقات</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{(index += 1)}</StyledTableCell>

                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="center">{row.building}</StyledTableCell>
                <StyledTableCell align="center">{row.office}</StyledTableCell>
                <StyledTableCell align="center">{row.from}</StyledTableCell>
                <StyledTableCell align="center">{row.reason}</StyledTableCell>
                <StyledTableCell align="center">{row.comment}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="footer-print">
        <Footer />
      </Box>
    </>
  );
}
