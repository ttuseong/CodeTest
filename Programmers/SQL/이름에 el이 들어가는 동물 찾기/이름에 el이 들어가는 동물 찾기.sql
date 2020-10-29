SELECT
    ANIMAL_ID,
    NAME
from
    ANIMAL_INS
where
    lower(NAME) like '%el%'
and
    ANIMAL_TYPE = 'Dog'
order by name asc;