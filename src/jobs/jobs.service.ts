import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto, UpdateJobDto } from './dto';
@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private repo: Repository<Job>) {}

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const job = await this.repo.findOneBy({ id });
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  create(dto: CreateJobDto) {
    const job = this.repo.create(dto);
    return this.repo.save(job);
  }

  async update(id: number, dto: UpdateJobDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Job not found');
    return { deleted: true };
  }
}
