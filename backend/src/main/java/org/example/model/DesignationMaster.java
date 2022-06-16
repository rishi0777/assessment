package org.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity(name="DesignationMaster")
public class DesignationMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long designationId;
    private String designation;

    public Long getDesignationId() {
        return designationId;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignationId(Long designationId) {
        this.designationId = designationId;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    @Override
    public String toString() {
        return "DesignationMaster{" +
                "designationId=" + designationId +
                ", designation='" + designation + '\'' +
                '}';
    }
}