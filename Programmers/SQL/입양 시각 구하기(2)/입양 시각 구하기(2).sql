select
    b.HOUR,
    case when a.count is null then 0
         when a.count is not null then a.count
    end as count
FROM
    (select
        to_char(DATETIME, 'HH24') HOUR,
        count(to_char(DATETIME, 'HH24')) COUNT
    from
        ANIMAL_OUTS
    group by to_char(DATETIME, 'HH24')) a,
    (SELECT
        LEVEL-1 HOUR
    from
        DUAL
    CONNECT BY
        LEVEL < 25) b
where
    a.HOUR(+) = b.HOUR
order by b.HOUR asc;