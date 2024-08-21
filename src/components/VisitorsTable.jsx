import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TextField } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useSelector } from "react-redux";
const rows = [
  createData(
    "محمد سعيد عبد السميع",
    "01018547851",
    "النظم",
    "البرمجيات",
    "جوجل",
    " بحث تعاون",
    "لا يوجد"
  ),
  createData(
    "علي أحمد حسن",
    "01234567890",
    "التسويق",
    "التجارة الإلكترونية",
    "فيسبوك",
    "ترويج منتجات",
    "تحت الاختبار"
  ),
  createData(
    "فاطمة محمد علي",
    "01123456789",
    "المبيعات",
    "التجارة الإلكترونية",
    "أمازون",
    "تسويق منتجات",
    "موافقة مسبقة"
  ),
  createData(
    "ياسمين مصطفى حسن",
    "01012345678",
    "التصميم",
    "الجرافيك",
    "أدوبي",
    "تصميم الشعارات",
    "جاري التنفيذ"
  ),
  createData(
    "أحمد محمود محمد",
    "01234567891",
    "تطوير البرمجيات",
    "التقنية",
    "مايكروسوفت",
    "تطوير تطبيقات الويب",
    "قيد الدراسة"
  ),
  createData(
    "نورهان عمر علي",
    "01198765432",
    "التسويق",
    "التجارة الإلكترونية",
    "تويتر",
    "إدارة حملات الإعلان",
    "جاري الاستعراض"
  ),
  createData(
    "ريم أحمد محمد",
    "01087654321",
    "الموارد البشرية",
    "الإدارة",
    "لينكد إن",
    "استقطاب الموظفين",
    "تحت الدراسة"
  ),
  createData(
    "محمود حسن محمود",
    "01234567892",
    "التسويق الرقمي",
    "التجارة الإلكترونية",
    "سناب شات",
    "تسويق المنتجات",
    "قيد الانتظار"
  ),
  createData(
    "سارة علي أحمد",
    "01123456788",
    "تطوير البرمجيات",
    "التقنية",
    "غوغل",
    "تطوير تطبيقات المحمول",
    "تحت الاختبار"
  ),
  createData(
    "مريم مصطفى حسن",
    "01019283746",
    "التصميم",
    "الجرافيك",
    "فوتوشوب",
    "تصميم المواقع",
    "موافقة مسبقة"
  ),
  createData(
    "أحمد علي محمود",
    "01234567893",
    "الدعم الفني",
    "التقنية",
    "مايكروسوفت",
    "حل المشاكل التقنية",
    "جاري العمل"
  ),
  createData(
    "نور محمد علي",
    "01134567894",
    "التسويق",
    "التجارة الإلكترونية",
    "إنستجرام",
    "تسويق المنتجات",
    "تحت الدراسة"
  ),
  createData(
    "مراد علي حسن",
    "01056789432",
    "تطوير البرمجيات",
    "التقنية",
    "فيسبوك",
    "تطوير تطبيقات الجوال",
    "تحت الانتظار"
  ),
  createData(
    "ليلى عمر محمود",
    "01234567895",
    "المبيعات",
    "التجارة الإلكترونية",
    "أمازون",
    "تسويق المنتجات",
    "قيد الدراسة"
  ),
  createData(
    "أميرة حسن علي",
    "01156789432",
    "التسويق",
    "التجارة الإلكترونية",
    "تويتر",
    "ترويج المنتجات",
    "موافقة مسبقة"
  ),
  createData(
    "علي أحمد حسن",
    "01234567890",
    "التسويق",
    "التجارة الإلكترونية",
    "فيسبوك",
    "ترويج منتجات",
    "تحت الاختبار"
  ),
  createData(
    "فاطمة محمد علي",
    "01123456789",
    "المبيعات",
    "التجارة الإلكترونية",
    "أمازون",
    "تسويق منتجات",
    "موافقة مسبقة"
  ),
  createData(
    "ياسمين مصطفى حسن",
    "01012345678",
    "التصميم",
    "الجرافيك",
    "أدوبي",
    "تصميم الشعارات",
    "جاري التنفيذ"
  ),
  createData(
    "أحمد محمود محمد",
    "01234567891",
    "تطوير البرمجيات",
    "التقنية",
    "مايكروسوفت",
    "تطوير تطبيقات الويب",
    "قيد الدراسة"
  ),
  createData(
    "نورهان عمر علي",
    "01198765432",
    "التسويق",
    "التجارة الإلكترونية",
    "تويتر",
    "إدارة حملات الإعلان",
    "جاري الاستعراض"
  ),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  // borderRight: "1px solid #ddd",
  // maxHeight: "8px",
  // "@media print": {
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: "#070F2B",
  //     "-webkit-print-color-adjust": "exact",
  //     colorAdjust: "exact",
  //   },
  // },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  phoneNumber,
  building,
  office,
  from,
  reason,
  comment
) {
  return { name, phoneNumber, building, office, from, reason, comment };
}
// const CustomTableContainer = styled(TableContainer)({
//   overflowX: 'auto',
//   '&::-webkit-scrollbar': {
//     width: '0.5em',
//     border:'5px'

//   },
//   '&::-webkit-scrollbar-thumb': {
//     backgroundColor: 'rgba(0,0,0,.3)',
//   },
// });
export default function VisitorsTable() {
  const { role } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        // width: "98%",
        marginInline: "auto",
        marginTop: "10px",
        // position: "relative",
        // direction: "rtl",
      }}
    >
      <TextField
        id="filled-search"
        label="بحث عن زائر"
        type="search"
        variant="outlined"
        size="small"
      />
      <TableContainer
        component={Paper}
        style={{
          marginTop: "10px",
          maxHeight: "85vh",
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="visitors table">
          <TableHead>
            <TableRow>
              <StyledTableCell>اسم الزائر</StyledTableCell>
              <StyledTableCell align="right">رقم المحمول</StyledTableCell>
              <StyledTableCell align="right">المبنى</StyledTableCell>
              <StyledTableCell align="right">المكتب</StyledTableCell>
              <StyledTableCell align="right">
                اسم الجهة / الشركه
              </StyledTableCell>
              <StyledTableCell align="right">سبب الزيارة</StyledTableCell>
              <StyledTableCell align="right">تعليقات</StyledTableCell>
              <StyledTableCell align="right">تعديل</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">{row.building}</StyledTableCell>
                <StyledTableCell align="right">{row.office}</StyledTableCell>
                <StyledTableCell align="right">{row.from}</StyledTableCell>
                <StyledTableCell align="right">{row.reason}</StyledTableCell>
                <StyledTableCell align="right">{row.comment}</StyledTableCell>
                <StyledTableCell align="right">
                  <Edit sx={{ cursor: "pointer", color: "green" }} />
                  {role === "ROLE_ADMIN" && (
                    <Delete sx={{ cursor: "pointer", color: "green", ml: 2 }} />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
