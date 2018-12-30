package com.example.gabrieljony.projetoCadastroapi.repository;

import com.example.gabrieljony.projetoCadastroapi.model.Cliente;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClienteRepository extends CrudRepository<Cliente, Long> {
    List<Cliente> findByCpf(long cpf);

}
