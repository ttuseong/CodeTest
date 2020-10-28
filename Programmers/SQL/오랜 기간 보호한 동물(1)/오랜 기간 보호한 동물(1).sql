select
    NAME,
    DATETIME
from
    (select
        rownum rn,
        NAME,
        DATETIME
    from
        (SELECT
            ANIMAL_INS.NAME,
            ANIMAL_INS.DATETIME
        from
            ANIMAL_INS,
            ANIMAL_OUTS
        where
            ANIMAL_INS.ANIMAL_ID = ANIMAL_OUTS.ANIMAL_ID(+)
        and
            ANIMAL_OUTS.ANIMAL_ID is null
        order by ANIMAL_INS.DATETIME asc))
where
    rn <= 3;