package com.example.gabrieljony.projetoCadastroapi.repository;

public interface ClienteRepository extends CrudRepository<Cliente, Long> {
    List<Cliente> findByCpf(int cpf);

}
