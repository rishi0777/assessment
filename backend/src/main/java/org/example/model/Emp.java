package org.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;
import java.sql.Date;


@Entity(name="Emp")
public class Emp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;
    private String firstName;
    private String lastName;

    private String designationId;
    private Date dateOfJoining;

    private BigInteger salary;

    public Emp() {
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getDesignationId() {
        return designationId;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public BigInteger getSalary() {
        return salary;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setDesignationId(String designationId) {
        this.designationId = designationId;
    }

    public void setDateOfJoining(Date dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public void setSalary(BigInteger salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Emp{" +
                "employeeId=" + employeeId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", designationId='" + designationId + '\'' +
                ", dateOfJoining=" + dateOfJoining +
                ", salary=" + salary +
                '}';
    }
}
