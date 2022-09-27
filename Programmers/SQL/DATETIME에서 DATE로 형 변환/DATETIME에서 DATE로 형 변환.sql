SELECT
    ANIMAL_ID,
    NAME,
    to_char(DATETIME, 'YYYY-MM-DD') 날짜
from
    ANIMAL_INS
order by ANIMAL_ID asc;