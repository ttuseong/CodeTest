SELECT
    ANIMAL_ID,
    NAME,
    case when SEX_UPON_INTAKE like 'Intact%' then 'X'
         when SEX_UPON_INTAKE not like 'Intact%' then 'O'
    end as 중성화
from
    ANIMAL_INS
order by ANIMAL_ID asc;