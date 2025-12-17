import { Box, Card, CardContent, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
import dayjs, { Dayjs } from 'dayjs';

interface OwnProps {
  start: Date;
  end: Date;
  setStart: (date: Date) => void;
  setEnd: (date: Date) => void;
}

export default function ({ start, end, setEnd, setStart }: OwnProps) {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={t('start')}
            value={dayjs(start)}
            onChange={(newValue: Dayjs | null) => {
              if (newValue) {
                setStart(newValue.toDate());
              }
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box sx={{ mx: 2 }}> {t('to')} </Box>
          <DatePicker
            label={t('end')}
            value={dayjs(end)}
            onChange={(newValue: Dayjs | null) => {
              if (newValue) {
                setEnd(newValue.toDate());
              }
            }}
            minDate={dayjs(start)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
}