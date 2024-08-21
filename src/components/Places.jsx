import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, DomainAdd } from "@mui/icons-material";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import CreatableSelect from "react-select/creatable";
const formatCreateLabel = (inputValue) => `اضافة: ${inputValue}`;
const customStyles = {
  control: (provided) => ({
    ...provided,
    fontFamily: "Cairo",
  }),
};
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
];

export default function Places() {
  const { role } = useSelector((state) => state.auth);
  const columns = [
    { field: "id", headerName: "م", width: 70, hide: true },
    {
      field: "building",
      headerName: "المبنى",
      width: "300",
    },
    {
      field: "office",
      headerName: "المكتب",
      width: 300,
    },

    {
      field: "actions",
      headerName: "الاجراءات",
      width: 128,
      headerClassName: "MuiDataGrid-colCellCenter",
      cellClassName: "MuiDataGrid-colCellCenter",
      renderCell: (params) => (
        <>
          <IconButton color="primary">
            <Edit />
          </IconButton>
          {role === "ROLE_ADMIN" && (
            <IconButton
              color="secondary"
              //   onClick={() => handleDelete(params.row?.id, params.row?.username)}
            >
              <Delete sx={{ color: "red" }} />
            </IconButton>
          )}
        </>
      ),
    },
  ];
  const options = [
    { value: "chocolate", label: "الايسر" },
    { value: "strawberry", label: "الاوسط" },
    { value: "vanilla", label: "النظم" },
  ];

  const options2 = [
    { value: "chocolate", label: "البرمجه" },
    { value: "strawberry", label: "الشبكات" },
    { value: "vanilla", label: "المساحه" },
  ];
  return (
    <Box position="relative">
      <Box
        sx={{
          height: "80vh",
          maxWidth: { xs: "90vw", sm: "80vw", md: "50vw" },
          width: "100%",
          marginInline: "auto",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap={3}
          mt={1}
          mb={2.5}
        >
          <Box width={229}>
            <CreatableSelect
              required
              isClearable
              options={options}
              //   value={options[0]}
              //   onChange={handleSectorChange}
              placeholder="اختر المبنى"
              styles={customStyles}
              formatCreateLabel={formatCreateLabel}
            />
          </Box>

          <Box width={229}>
            <CreatableSelect
              required
              isClearable
              //   isDisabled={!selectedSector}
              options={options2}
              //   value={options[0]}
              //   onChange={handleDepartementChange}
              placeholder="اختر المكتب"
              styles={customStyles}
              formatCreateLabel={formatCreateLabel}
            />
          </Box>

          {/* <CreatablePlaces/>
          <CreatablePlaces/> */}
          <Button variant="contained" startIcon={<DomainAdd />}>
            اضافه
          </Button>
        </Stack>
        <DataGrid
          rows={rows}
          columns={columns}
          showCellVerticalBorder
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Box>
    </Box>
  );
}
