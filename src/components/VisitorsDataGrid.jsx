import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Delete, Edit, PersonAddAlt1, Print } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import MyModal from "./MyModal";
import VisistorForm from "./VisistorForm";
import Footer from "./Footer";
import SweatAlert from "./SweatAlert";

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
    building: "النظم",
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
    building: "النظم",
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
    building: "النظم",
    office: "الإدارة",
    from: "لينكد إن",
    reason: "استقطاب الموظفين",
    comment: "تحت الدراسة",
  },
  {
    id: 8,
    name: "محمود حسن محمود",
    phoneNumber: "01234567892",
    building: "النظم",
    office: "التجارة الإلكترونية",
    from: "سناب شات",
    reason: "تسويق المنتجات",
    comment: "قيد الانتظار",
  },
  {
    id: 9,
    name: "سارة علي أحمد",
    phoneNumber: "01123456788",
    building: "النظم",
    office: "التقنية",
    from: "غوغل",
    reason: "تطوير تطبيقات المحمول",
    comment: "تحت الاختبار",
  },
  {
    id: 10,
    name: "مريم مصطفى حسن",
    phoneNumber: "01019283746",
    building: "النظم",
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
    building: "النظم",
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
    building: "النظم",
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
    building: "النظم",
    office: "التجارة الإلكترونية",
    from: "فيسبوك",
    reason: "ترويج منتجات",
    comment: "تحت الاختبار",
  },
  {
    id: 17,
    name: "فاطمة محمد علي",
    phoneNumber: "01123456789",
    building: "النظم",
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
];

const arLocaleText = {
  rootGridLabel: "الجدول",
  noRowsLabel: "لا يوجد زائرين",
  toolbarDensity: "الحجم",
  toolbarDensityLabel: "الحجم",
  toolbarDensityCompact: "صغير",
  toolbarDensityStandard: "متوسط",
  toolbarDensityComfortable: "كبير",
  toolbarExport: "تصدير",
  toolbarExportPrint: "طباعة",
  toolbarExportCSV: "تنزيل ملف csv",
  toolbarFilters: "فلتر",
  toolbarColumns: "الاعمدة",
};
const INITIAL_USER = {
  name: "",
  phoneNumber: "",
  building: "",
  office: "",
  from: "",
  reason: "",
  comment: "",
};

export default function VisitorsDataGrid() {
  const { role } = useSelector((state) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateUser, setUpdateUser] = useState(INITIAL_USER);

  const columns = [
    { field: "id", headerName: "م", width: 50, hide: true },
    { field: "name", headerName: "اسم الزائر", width: 300 },
    { field: "phoneNumber", headerName: "رقم المحمول", width: 130 },
    {
      field: "building",
      headerName: "المبنى",
      width: 140,
    },
    {
      field: "office",
      headerName: "المكتب",
      width: 140,
    },
    {
      field: "from",
      headerName: "اسم الجهة / الشركه",
      width: 160,
    },
    {
      field: "reason",
      headerName: "سبب الزياره",
      width: 300,
    },
    {
      field: "comment",
      headerName: "تعليقات",
      width: 250,
    },
    {
      field: "actions",
      headerName: "الاجراءات",
      width: 110,
      disableExport: true,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => handleEditVisitor(params.row, params.row?.name)}
          >
            <Edit />
          </IconButton>
          {role === "ROLE_ADMIN" && (
            <IconButton
              color="secondary"
              onClick={() =>
                handleDeleteVisitor(params.row?.id, params.row?.name)
              }
            >
              <Delete sx={{ color: "red" }} />
            </IconButton>
          )}
        </>
      ),
    },
  ];
  const handleEditVisitor = (row, name) => {
    setUpdateUser(row);
    setModalOpen(true);
    setUpdateUser(row);
  };

  const handleDeleteVisitor = async (id, name) => {
    const willDelete = await SweatAlert({
      title: `هل متاكد من حذف "${name}"؟`,
      dangerMode: true,
    });
    if (willDelete) {
      console.log(id, name);
      // dispatch(deleteUser(id))
      //   .unwrap()
      //   .then((res) => {
      //     swal("تم حذف المستخدم بنجاح", "", "success");
      //     dispatch(getUsers());
      //   })
      //   .catch((err) => {
      //     swal("حدث خطا ما", "", "error");
      //     console.error(err);
      //   });
    }
  };

  const handleAddVisitor = () => {
    setUpdateUser(INITIAL_USER);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box position="relative">
      <MyModal
        open={modalOpen}
        handleClose={handleModalClose}
        title={
          updateUser?.name ? `تعديل بيانات "${updateUser.name}"` : "اضافة زائر"
        }
      >
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <VisistorForm updateUser={updateUser} />
        </Box>
      </MyModal>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={3}
        mt={1}
        mb={2}
      >
        <TextField
          id="filled-search"
          label="بحث عن زائر"
          type="search"
          variant="outlined"
          size="small"
          
        />
        <Button
          sx={{
            backgroundColor: '#FFC100',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#FFD700', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }
          }}
          variant="contained"
          onClick={() => handleAddVisitor()}
          startIcon={<PersonAddAlt1 />}
          
        >
          اضافه زائر
        </Button>
        <Button
          sx={{
            backgroundColor: '#FFC100',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#FFD700', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }
          }}
          variant="contained"
          onClick={() => window.print()}
          startIcon={<Print />}
        >
          طباعة
        </Button>
      </Stack>
      <div
        style={{
          height: "80vh",
          maxWidth: "90vw",
          width: "100%",
          marginInline: "auto",
        }}
      >
        <DataGrid
          sx={{ direction: "ltr" }}
          
          className="visitor-grid"
          rows={rows}
          columns={columns}
          showCellVerticalBorder
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          localeText={arLocaleText}
          pageSizeOptions={[5, 10]}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: { printOptions: { disableToolbarButton: true } },
          }}
        />
        <Box className="my-footer">
          <Footer />
        </Box>
      </div>
    </Box>
  );
}
