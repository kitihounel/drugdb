drop trigger if exists drug_after_insert;
drop trigger if exists drug_after_delete;
drop trigger if exists drug_after_update;
drop table   if exists drug_fts;
drop table   if exists drug;

create table drug (
  id integer primary key,
  number varchar not null,
  name varchar not null,
  inn text not null,
  dose text not null,
  form varchar not null,
  route varchar not null,
  presentation varchar not null,
  class varchar not null,
  auth varchar not null,
  auth_expiration_date varchar not null,
  manufacturer varchar not null,
  owner varchar not null,
  price varchar not null
);

create virtual table drug_fts using fts5 (
    name,
    inn,
    id unindexed,
    form unindexed,
    presentation unindexed, 
    route unindexed,
    content='drug',
    content_rowid='id'
);

create trigger drug_after_insert after insert on drug
begin
  insert into drug_fts (rowid, name, inn) values (new.id, new.name, new.inn);
end;

create trigger drug_after_delete after delete on drug
begin
  insert into drug_fts (drug_fts, rowid, name, inn) values ('delete', old.id, old.name, old.inn);
end;

create trigger drug_after_update after update on drug
begin
  insert into drug_fts (drug_fts, rowid, name, inn) values ('delete', old.id, old.name, old.inn);
  insert into drug_fts (rowid, drugname, short_description) values (new.id, new.name, new.inn);
end;
