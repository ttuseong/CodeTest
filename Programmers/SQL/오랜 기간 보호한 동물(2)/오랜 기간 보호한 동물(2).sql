select
    ANIMAL_ID,
    NAME
from
    (SELECT
        ANIMAL_INS.ANIMAL_ID,
        ANIMAL_INS.NAME
    from
        ANIMAL_INS,
        ANIMAL_OUTS
    where
        ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID
    order by (ANIMAL_OUTS.DATETIME - ANIMAL_INS.DATETIME)  desc)
where
    rownum < 3;