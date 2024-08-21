import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const VisitorList = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const visitors = [
    { id: 1, name: 'السيد رفعت العشماوي', phone: '010000000000', comingFrom: 'الهندسية', movements: [ { time: '11:45 AM', location: 'الهندسية' },{ time: '11:45 AM', location: 'الهندسية' }] },
    { id: 3, name: 'السيد رفعت العشماوي', phone: '010000000000', comingFrom: 'الهندسية', movements: [ { time: '11:45 AM', location: 'الهندسية' }] },
    { id: 2, name: 'السيد رفعت العشماوي', phone: '010000000000', comingFrom: 'الهندسية', movements: [ { time: '11:45 AM', location: 'الهندسية' }] },
    { id: 2, name: 'السيد رفعت العشماوي', phone: '010000000000', comingFrom: 'الهندسية', movements: [ { time: '11:45 AM', location: 'الهندسية' }] },
    { id: 2, name: 'السيد رفعت العشماوي', phone: '010000000000', comingFrom: 'الهندسية', movements: [ { time: '11:45 AM', location: 'الهندسية' }] },

  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <Box sx={{ maxHeight: '660px',  borderRadius: '5px', marginBottom: '15px', overflowY: 'auto'}}>
      {visitors.map((visitor) => (
        <Card key={visitor.id} sx={{ marginBottom: '10px', cursor: 'pointer', border: '2px solid #FFC100' }} >
          <CardContent sx={{padding:'16px 16px 0 16px'}} onClick={() => handleCardClick(visitor.id)}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '10px' }} color="text.secondary" gutterBottom>
                اسم الزائر 
              </Typography>
              <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '23px' }} color="text.secondary" gutterBottom>
                  |
              </Typography>
              <Typography sx={{ fontSize: 15, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', color: '#000000', marginBottom: '10px', marginLeft: '10px' }} gutterBottom>
                {visitor.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '10px' }} color="text.secondary" gutterBottom>
                رقم الهاتف 
              </Typography>
              <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '10px' }} color="text.secondary" gutterBottom>
                  |
              </Typography>
              <Typography sx={{ fontSize: 18, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', color: '#000000', marginBottom: '10px', marginLeft: '15px' }} gutterBottom>
                {visitor.phone}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '10px' }} color="text.secondary" gutterBottom>
                قادم من 
              </Typography>
              <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '24.5px' }} color="text.secondary" gutterBottom>
                  |
              </Typography>
              <Typography sx={{ fontSize: 18, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', color: '#000000', marginBottom: '10px', marginLeft: '15px' }} gutterBottom>
                {visitor.comingFrom}
              </Typography>
            </Box>
            {expandedCard === visitor.id && (
                <>
                  <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'left', marginBottom: '10px', marginLeft: '10px' }} color="text.secondary" gutterBottom>
                    تحركات الزائر |
                  </Typography>
                <Box>
                 <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-around',backgroundColor:'#ECECEC', width:'70%',margin:'0 auto ' ,borderRadius:'10px'}}>
                 <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'center', color: '#4B4B4B', marginBottom: '10px', marginTop: '10px' }} color="text.secondary" gutterBottom>
                  المبنى
                  </Typography>
                  <Typography sx={{ fontSize: 14, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'center', color: '#4B4B4B', marginBottom: '10px', marginTop: '10px' }} color="text.secondary" gutterBottom>
                  الوقت
                  </Typography>
                 </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',marginTop:'8px' }}>
                  {visitor.movements.map((movement, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-around', marginBottom: '10px' ,width:'70%'}}>
                      <Typography sx={{ fontSize: 13, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right',  marginBottom: '10px' }} gutterBottom>
                        {movement.location} 
                      </Typography>
                      <Typography sx={{ fontSize: 13, fontFamily: 'Cairo', fontWeight: 500, textAlign: 'right', marginBottom: '10px', marginLeft: '15px' }} color="text.secondary" gutterBottom>
                        {movement.time} 
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box></>
            )}
          </CardContent>
          <CardActions st={{boxShadow:'none'}}>
            <button style={{ width: '100%',  fontFamily: 'Cairo',backgroundColor: '#FFC100', border: 'none', color: 'white',  height: '45px', fontSize: '20px', cursor: 'pointer',boxShadow:'none' }}>انهاء الزيارة</button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default VisitorList;
